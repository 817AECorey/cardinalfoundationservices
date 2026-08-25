/*
  Lead storage is a per-machine volume, but the app runs on two machines.
  Without pinning, submissions split across volumes and any export lies by
  omission. Both the contact POST and the leads export replay onto the
  designated primary machine via Fly's fly-replay header, so every lead
  lands in (and every export reads) one file.

  PRIMARY_LEADS_MACHINE is set in fly.toml [env]. If that machine is ever
  destroyed or replaced, update the id there; unset disables pinning
  (split-brain returns, but nothing breaks).
*/
export function replayToPrimary(): Response | null {
  const primary = process.env.PRIMARY_LEADS_MACHINE;
  const self = process.env.FLY_MACHINE_ID;
  if (!primary || !self || self === primary) return null;
  return new Response(null, { headers: { "fly-replay": `instance=${primary}` } });
}
