export default function calculateHealth(heroes) {
  if (heroes.health < 15) {
    return 'critical';
  } if (heroes.health < 50) {
    return 'wounded';
  }

  return 'healthy';
}
