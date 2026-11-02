import { DataAPIClient } from "@datastax/astro-db-ts";
import { PuppeteerWebBaseLoader } from "langchain/document_loaders/web/puppeteer";
import OpenAI from "openai";
import {RecursiveCharacterTextSplitter} from "langchain/text_spliter";

import "dotenv/config";
