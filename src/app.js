import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';

const  app = express ();

app.use ( cors (), bodyParser.json())



export default app;