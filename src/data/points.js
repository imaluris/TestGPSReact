export const points = [
  {
    id: 1,
    name: "Punto 1 - Primo punto via mentana",
    lat: 42.554030,
    lng: 12.642713,
    text: "Sei arrivato al primo punto di interesse. Da qui parte la storia.",
    radius: 30, // metri
    path: "/",
    nextPath: "/punto-2",
  },
  {
    id: 2,
    name: "Punto 2 - Paggi e serangeli",
    lat: 42.555418,
    lng: 12.643402,
    text: "Secondo punto raggiunto. La storia continua.",
    radius: 30,
    path: "/punto-2",
    nextPath: "/punto-3",
  },
  {
    id: 3,
    name: "Punto 3 - Passerella",
    lat: 42.556040,
    lng: 12.643572,
    text: "Ultimo punto raggiunto. Hai completato il test.",
    radius: 30,
    path: "/punto-3",
    nextPath: null,
  },
];

export function getPointByPath(pathname) {
  return points.find((point) => point.path === pathname);
}