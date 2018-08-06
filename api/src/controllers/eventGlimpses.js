import { successResponse, failureResponse } from "./responses";

import glimpsService from "../services/glimps";
import eventsService from "../services/events";

const index = async (req, res) => {
  try {
    const { id } = req.params;

    let event = await eventsService.findById(id);
    if (!event) {
      throw new Error("eventId is not valid");
    }

    let glimpses = await glimpsService.findByEventId(event.id);
    if (!glimpses) {
      throw new Error(`no glimpes for event with eventId: ${id}`);
    }

    return successResponse(res, glimpses);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

const create = async (req, res) => {
  try {
    const { id } = req.params;

    let event = await eventsService.findById(id);
    if (!event) {
      throw new Error("eventId is not valid");
    }

    const { data } = req.body;

    let glimps = await glimpsService.create(event.id, data);
    return successResponse(res, glimps);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

export default { index, create };
