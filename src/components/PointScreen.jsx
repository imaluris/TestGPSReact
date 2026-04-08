import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useGeolocation from "../hooks/useGeolocation";
import { getDistanceInMeters } from "../utils/distance";

export default function PointScreen({ point, isLanding = false }) {
  const navigate = useNavigate();
  const { position, error, permissionState } = useGeolocation();

  const distance = useMemo(() => {
    if (!position || !point) return null;

    return getDistanceInMeters(
      position.lat,
      position.lng,
      point.lat,
      point.lng
    );
  }, [position, point]);

  const isInsideRange = distance !== null && distance <= point.radius;

  function handleClick() {
    if (!isInsideRange) return;

    if (point.nextPath) {
      navigate(point.nextPath);
    } else {
      alert("Hai completato il percorso di test.");
    }
  }

  return (
    <div className="screen">
      <h1>{isLanding ? "Landing Page" : point.name}</h1>

      <div className="card">
        <h2>{point.name}</h2>
        <p>{point.text}</p>

        <p>
          <strong>Coordinate target:</strong> {point.lat}, {point.lng}
        </p>

        <p>
          <strong>Raggio richiesto:</strong> {point.radius} metri
        </p>

        {position ? (
          <>
            <p>
              <strong>La tua posizione:</strong> {position.lat.toFixed(6)},{" "}
              {position.lng.toFixed(6)}
            </p>

            <p>
              <strong>Accuratezza stimata:</strong> ±
              {Math.round(position.accuracy)} m
            </p>

            <p>
              <strong>Distanza dal punto:</strong>{" "}
              {distance !== null ? `${Math.round(distance)} m` : "--"}
            </p>

            <p className={isInsideRange ? "ok" : "ko"}>
              {isInsideRange
                ? "Sei nel range: pulsante abilitato"
                : "Fuori range: pulsante disabilitato"}
            </p>
          </>
        ) : (
          <p>Sto cercando la tua posizione...</p>
        )}

        {permissionState && (
          <p>
            <strong>Permesso geolocalizzazione:</strong> {permissionState}
          </p>
        )}

        {error && <p className="error">{error}</p>}

        <button onClick={handleClick} disabled={!isInsideRange}>
          {point.nextPath ? "Vai alla schermata successiva" : "Completa"}
        </button>
      </div>
    </div>
  );
}