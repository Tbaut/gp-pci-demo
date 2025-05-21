import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Request, type Response, type Router } from "express";
import { z } from "zod";

import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { TokenSchema } from "./tokenModel";
import { tokenController } from "./tokenController";

export const tokenRegistry = new OpenAPIRegistry();
export const tokenRouter: Router = express.Router();

tokenRegistry.registerPath({
	method: "get",
	path: "/token",
	tags: ["Token"],
	responses: createApiResponse(TokenSchema, "Success"),
});

tokenRouter.get("/", tokenController.getToken);
