import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState("");
  const [permissionState, setPermissionState] = useState("prompt");

  useEffect(() => {
    let watchId = null;

    async function startWatching() {
      if (!("geolocation" in navigator)) {
        setError("La geolocalizzazione non è supportata da questo browser.");
        return;
      }

      if ("permissions" in navigator) {
        try {
          const permission = await navigator.permissions.query({
            name: "geolocation",
          });

          setPermissionState(permission.state);

          permission.onchange = () => {
            setPermissionState(permission.state);
          };
        } catch {
          // ignoriamo se il browser non supporta bene questa parte
        }
      }

      watchId = navigator.geolocation.watchPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            accuracy: pos.coords.accuracy,
          });
          setError("");
        },
        (err) => {
          if (err.code === 1) {
            setError("Permesso di geolocalizzazione negato.");
          } else if (err.code === 2) {
            setError("Posizione non disponibile.");
          } else if (err.code === 3) {
            setError("Timeout nel recupero della posizione.");
          } else {
            setError("Errore durante la geolocalizzazione.");
          }
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 10000,
        }
      );
    }

    startWatching();

    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return { position, error, permissionState };
}