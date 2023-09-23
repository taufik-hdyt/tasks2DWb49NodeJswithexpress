import express, { Router } from 'express'
import DataWilayahController from '../controllers/DataWilayahController'
const router = Router()


router.get('/datawilayah', DataWilayahController.find)
router.get('/datawilayah/:id', DataWilayahController.findOne)
router.post('/datawilayah', DataWilayahController.create)
router.patch('/datawilayah/:id', DataWilayahController.update)
router.delete('/datawilayah/:id', DataWilayahController.delete)

export default router