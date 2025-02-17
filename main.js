import 'dotenv/config'
import { spawn } from "child_process";
import { getRandomArticle } from './randomArticle.js';

spawn('open', [(await getRandomArticle()).properties.URL.url])
