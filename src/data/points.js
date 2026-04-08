export const points = [
  {
    id: 1,
    name: "Punto 1 - Fontana",
    lat: 45.464211,
    lng: 9.191383,
    text: "Sei arrivato al primo punto di interesse. Da qui parte la storia.",
    radius: 30, // metri
    path: "/",
    nextPath: "/punto-2",
  },
  {
    id: 2,
    name: "Punto 2 - Piazza",
    lat: 45.464800,
    lng: 9.190900,
    text: "Secondo punto raggiunto. La storia continua.",
    radius: 30,
    path: "/punto-2",
    nextPath: "/punto-3",
  },
  {
    id: 3,
    name: "Punto 3 - Torre",
    lat: 45.465300,
    lng: 9.190300,
    text: "Ultimo punto raggiunto. Hai completato il test.",
    radius: 30,
    path: "/punto-3",
    nextPath: null,
  },
];

export function getPointByPath(pathname) {
  return points.find((point) => point.path === pathname);
}