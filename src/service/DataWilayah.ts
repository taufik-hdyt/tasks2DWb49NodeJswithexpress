import { Request, Response } from "express";
import crudts from "../databases/models/crudts";

export default new (class DataWilayahServices {
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const data = await crudts.findAll();
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(200).json({
        message: "Something error while find",
      });
    }
  }
  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const data = await crudts.findByPk(id);
      if (!data) res.status(400).json({ Error: "ID not found" });
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something error while findOne" });
    }
  }
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { provinces, city, sub_district, village } = req.body;
      const data = await crudts.create({provinces,city,village,sub_district})
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something error while create" });
    }
  }
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = Number(req.params.id)
      const dataUpdate = await crudts.findByPk(id)
      if(!dataUpdate) return res.status(404).json({
        message: 'Data not found'
      })
      const updateData = req.body
      const data = await dataUpdate.update(updateData)
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something error while update" });
    }
  }
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = Number(req.params.id)
      const dataDelete = await crudts.findByPk(id)
      if(!dataDelete) return res.status(404).json({
        message: 'Data not found'
      })
      await dataDelete.destroy()
      return res.status(200).json({
        message: 'Data is deleted'
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something error while update" });
    }
  }
})();
