import { setupServer } from 'msw/node'
import {userHandlers} from "@/tests/mocks/handlers/user.handler";

const finalHandlers = [...userHandlers]

export const server = setupServer(...finalHandlers)
