import { DataTypeEnum, ShortTypeEnum } from "./EnumData";

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

export interface ShortsListingDataType {
  type: DataTypeEnum.SHORTS_LISTING;
  data: ShortDataType[];
  title: string;
  subtitle?: string;
}

export interface ShortDataType {
  isOriginalAspectRatio: boolean;
  params: string;
  playerParams: string;
  sequenceParams: string;
  thumbnail: ThumbnailDataType[];
  title: string;
  type: ShortTypeEnum.SHORT;
  videoId: string;
  viewCountText: string;
}

export interface ThumbnailDataType {
  url: string;
  height?: number;
  width?: number;
}
