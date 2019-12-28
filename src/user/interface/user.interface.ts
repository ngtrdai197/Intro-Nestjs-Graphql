import { Document } from 'mongoose'
import { IPost } from '../../post/interfaces/post.schema'

export interface IUser extends Document {
  readonly username: string
  readonly fullName: string
  readonly address: string
  readonly postIds: string[]
  readonly posts: IPost[]
}
