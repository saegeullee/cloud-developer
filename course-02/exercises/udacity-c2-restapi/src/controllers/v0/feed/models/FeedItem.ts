import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  ForeignKey
} from "sequelize-typescript";
import { User } from "../../users/models/User";

@Table
export class FeedItem extends Model<FeedItem> {
  @Column

  //Column decorator declares that there will be a caption column within our database. Sequelize is clever enough to be able to map the TypeScript type to the Postgres type.
  //we can add a custom exclamation point to declare whether or not that kind of field can be null or not.
  public caption!: string;

  @Column
  public url!: string;

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();
}
