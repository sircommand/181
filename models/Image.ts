import mongoose from 'mongoose'

interface IImage extends mongoose.Document {
  title: string
  url: string
  categoryId: mongoose.Schema.Types.ObjectId
  subcategoryId?: mongoose.Schema.Types.ObjectId
  price?: number
  views: number
  code: string
  createdAt: Date
  updatedAt: Date
}

const imageSchema = new mongoose.Schema<IImage>(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, required: true },
    subcategoryId: { type: mongoose.Schema.Types.ObjectId },
    price: { type: Number },
    views: { type: Number, default: 0 },
    code: { type: String, unique: true, required: true },
  },
  { timestamps: true }
)

export default mongoose.models.Image || mongoose.model<IImage>('Image', imageSchema)