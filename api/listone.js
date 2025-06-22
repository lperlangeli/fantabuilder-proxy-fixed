import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://fantabuilder.it/listone.csv');
    if (!response.ok) {
      return res.status(500).send('Errore nel recupero del CSV');
    }

    const data = await response.text();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/csv');
    res.status(200).send(data);
  } catch (err) {
    console.error("Errore interno:", err);
    res.status(500).send('Errore interno');
  }
}
