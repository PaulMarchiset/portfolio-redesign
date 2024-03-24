import PocketBase from 'pocketbase';
import type { designResponse, webResponse, videoResponse, photoResponse, collectionResponse } from'@/pocketbase-types'
export const pb = new PocketBase("https://paulmarchiset.me/");


// Fonction qui retourne la liste de tous les artistes
export async function allDesign() {
  const records = await pb.collection('design').getFullList<designResponse>({
      sort: '-score'});
      return records;
}

//@ts-ignore
export async function DesignID(id:string) {
  const records = await pb.collection('design').getOne<designResponse>(id);
  return records;
}

//@ts-ignore
export async function DesignName(name:string) {
  const records = await pb.collection('design').getOne<designResponse>(name);
  return records;
}

export async function allWeb() {
  const records = await pb.collection('web').getFullList<webResponse>({
      sort: '-score'});
      return records;
}

//@ts-ignore
export async function WebID(id:string) {
  const records = await pb.collection('web').getOne<webResponse>(id);
  return records;
}


export async function allVideo() {
  const records = await pb.collection('video').getFullList<videoResponse>({
      sort: '-score'});
      return records;
}

//@ts-ignore
export async function VideoID(id:string) {
  const records = await pb.collection('video').getOne<videoResponse>(id);
  return records;
}

export async function allPhotos() {
  const records = await pb.collection('photo').getFullList<photoResponse>({});
  for (let i = records.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [records[i], records[j]] = [records[j], records[i]];
  }
  return records;
}


export async function PhotoID(id:string) {
  const records = await pb.collection('photo').getOne<photoResponse>(id);
  return records;
}

export async function allCollection() {
  const records = await pb.collection('collection').getFullList<collectionResponse>();
      return records;
}

export async function CollectionID(id:string) {
  const records = await pb.collection('collection').getFullList<collectionResponse>();
      return records;
}