/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBDTDJDdHlNUnRZd2F1ODRTUThHTlc5NTdrYkJ1MCttbGdsOVhGZTMxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieW5ndGFDdXE4dUlUTTlwVWFuTzFiMFlqMnlsRkJneW94bTV1NHdsdU54az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJUHVSU3UvMFhPOFY3Q1RCRGZ1TC9NSTJLb1dJNUlwSGJSNGsyQTM5Tkh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvbm9XM2pIK0ZsaHJIbm9lTUlNWWhIeHZTVUs2elFaVmdveGFLbVhRYURNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1PSU92ZXgrRlp6bSsxSlovMFozZDUrc0gyMlcwZHBvd2QySThpQXF5Vm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ2WTBCZS9NbFpaai9Nc3JpaFI0cEpzaFBZeW40Z1hqemRKWUE2dWl2RUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0wwODdXM3lKUktpUkhLM2pSUnN6NUduempkSS9nNzQyMHQyY25DTElFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTFGeGpZWE11Qy9rOFI1NjhJMmQ3b0pWaXFiWlNYZVFlRHNrUGNvRGJXOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdnbXptR1BrUlhsQXBiRTdnZVNXcEhOSDhyVkkwTkROeWNaaXdMVFNWS3cxWnlQTDFIL3NsMVMxV2hHTlF3NS93OG5NQStjSEJ6TG9nZ0F5WlNQR0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiJOOWJtVHh6L2JCM0RjQmZ5dVlISjBpVWY0MWNKUzBoRk5JVFc2U2JJRkF3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfQjkya1A1MlJVLUZMTmFoMklRRExBIiwicGhvbmVJZCI6IjdhNzNjZWE1LWI4NWMtNDRlZi1hYTVkLTA5YWI3NTNhMzcyZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWMzgzKzZSa29YbnprNzhyTExnKzhtTUI0bzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWpKTVhnOXZCNHFYRmFYaXhKVHdOanFlWmE0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZCWURHTkZBIiwibWUiOnsiaWQiOiIyMzQ4MTA1NTUyMTc3OjE1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMYnk3eXNRZ0tpTnV3WVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyNlk0KzVzOUhWdmY3RnJRakx4MUdZbDg0Y0NCVi80UDRZYWdXaytHNlZnPSIsImFjY291bnRTaWduYXR1cmUiOiJLZFo2NnZpbjNnUFZUTkoxQ1JkMDl1cUZscFlTNDhpODByRXdBVnhvY3JNY1ZheXU1ajVaYkNVOWNKczdQVFpyUDZoWDBVR3Y3Zks4UzgwejhTY2lCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoid2t2VTc2L3V1cUhQbDlLUG1GUEg1a3E4OElJNG9OSzRjZ0N4aUU4UjJqT1FiOXI2QTdJUHBHck5jSGw1NzhZSE1mYWlrWU9aVUowM1gwb3UzYWp5Q2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTA1NTUyMTc3OjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmErbU9QdWJQUjFiMyt4YTBJeThkUm1KZk9IQWdWZitEK0dHb0ZwUGh1bFkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ1NjI4Mjl9';
const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  api,
  appname,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
