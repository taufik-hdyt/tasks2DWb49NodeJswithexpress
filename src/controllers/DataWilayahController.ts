import { Request, Response } from "express"
import DataWilayah from "../service/DataWilayah"

export default new class TodoController {
  find(req: Request, res: Response) {
    DataWilayah.find(req, res)
  }
  findOne(req: Request, res: Response) {
    DataWilayah.findOne(req, res)
  }
  create(req: Request, res: Response) {
    DataWilayah.create(req, res)
  }
  update(req: Request, res: Response) {
    DataWilayah.update(req, res)
  }
  delete(req: Request, res: Response) {
    DataWilayah.delete(req, res)
  }
}