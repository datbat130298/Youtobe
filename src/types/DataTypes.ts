import { DataTypeEnum } from "./EnumData";

export interface VideoDataType {
  channelId: string;
  title: string;
  type: DataTypeEnum.VIDEO;
  viewCount: number;
  thumbnail: ThumbnailDataType[];
  lengthText: string;
  description: string;
  channelTitle: string;
  channelThumbnail: ThumbnailDataType[];
}
export interface PlaylistDataType {}

export interface ThumbnailDataType {
  url: string;
}
