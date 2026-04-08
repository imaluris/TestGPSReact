export const points = [
  {
    id: 1,
    name: "Punto 1 - Casa Marci",
    lat: 42.572847,
    lng: 12.735941,
    text: "Sei arrivato al primo punto di interesse. Da qui parte la storia.",
    radius: 20, // metri
    path: "/",
    nextPath: "/punto-2",
  },
  {
    id: 2,
    name: "Punto 2 - Arco Torreorsina",
    lat: 42.572581,
    lng: 12.735299,
    text: "Secondo punto raggiunto. La storia continua.",
    radius: 20,
    path: "/punto-2",
    nextPath: "/punto-3",
  },
  {
    id: 3,
    name: "Punto 3 - Bar Torreorsina",
    lat: 42.571922,
    lng: 12.734706,
    text: "Ultimo punto raggiunto. Hai completato il test.",
    radius: 20,
    path: "/punto-3",
    nextPath: null,
  },
];

export function getPointByPath(pathname) {
  return points.find((point) => point.path === pathname);
}