/**
* This file was @generated using pocketbase-typegen
*/

import type { UrlParams } from '@vueuse/core'
import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	design = "design",
	web = "web",
	video = "video",
	photo = "photo",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum DesignCategoryOptions {
	"branding" = "branding",
	"typography" = "typography",
	"advertising" = "advertising",
}

export enum DesignSoftwareOptions {
	"figma" = "figma",
	"illustrator" = "illustrator",
	"indesign" = "indesign",
	"after effects" = "after effects",
	"fontlab 7" = "fontlab 7",
	"photoshop" = "photoshop",
	"premiere pro" = "premiere pro",
	"dimension" = "dimension",
}

export type designRecord = {
	name?: string	
	cover_image?: string
	category?: DesignCategoryOptions
	photo?: string
	catchphrase?: string
	gif_desktop?: string
	gif_mobile?: string
	video?: string
	about?: string
	image_main?: string
	image_secondary?: string
	client?: string
	softwares?: DesignSoftwareOptions
	year?: number
	download?: string
	score?: number
}

export enum WebToolsOptions {
	"vuejs" = "vuejs",
	"tailwindcss" = "tailwindcss",
	"pocketbase" = "pocketbase",
	"wordpress" = "wordpress",
	"html" = "html",
	"css" = "css",
	"js" = "js",
	"figma" = "figma",
}

export enum WebSkillsOptions {
	"webdesign" = "webdesign",
	"front-end" = "front-end",
	"back-end" = "back-end",
}

export type webRecord = {
	name?: string
	photo?: string
	catchphrase?: string
	video_desktop?: string
	video_mobile?: string
	about?: string
	image_main?: string
	image_secondary?: string
	client?: string
	skills?: WebSkillsOptions
	tools?: WebToolsOptions
	with?: string
	year?: number
	weblink?: string
	score?: number
	colormatte1?: string
	colormatte2?: string
}

export enum VideoGenreOptions {
	"aftermovie" = "aftermovie",
	"documentary" = "documentary",
	"press conference" = "press conference",
	"broadcast" = "broadcast",
	"fiction" = "fiction",
}

export enum VideoRoleOptions {
	"filmmaker" = "filmmaker",
	"tv director" = "tv director",
	"editor" = "editor",
	"colorist" = "colorist",
	"vfx" = "vfx",
	"graphic designer" = "graphic designer",
}

export enum VideoSoftwareOptions {
	"premiere pro" = "premiere pro",
	"after effects" = "after effects",
	"davinci resolve" = "davinci resolve",
}

export type videoRecord = {
	name?: string
	genre?: VideoGenreOptions
	photo?: string
	catchphrase?: string
	videolink?: string
	about?: string
	image_main?: string
	client?: string
	role?: VideoRoleOptions
	softwares?: VideoSoftwareOptions
	with?: string
	year?: number
	score?: number
}

export type photoRecord = {
	name?: string
	image?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type designResponse<Texpand = unknown> = Required<designRecord> & BaseSystemFields<Texpand>
export type webResponse<Texpand = unknown> = Required<webRecord> & BaseSystemFields<Texpand>
export type videoResponse<Texpand = unknown> = Required<videoRecord> & BaseSystemFields<Texpand>
export type collectionResponse<Texpand = unknown> = Required<videoRecord & webRecord & designRecord> & BaseSystemFields<Texpand>
export type photoResponse<Texpand = unknown> = Required<photoRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	design: designRecord
	web: webRecord
	video: videoRecord
	photo: photoRecord
	users: UsersRecord
}

export type CollectionResponses = {
	design: designResponse
	web: webResponse
	video: videoResponse
	photo: photoResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	//@ts-ignore
	collection(idOrName: 'design'): RecordService<designResponse>
	//@ts-ignore
	collection(idOrName: 'web'): RecordService<webResponse>
	//@ts-ignore
	collection(idOrName: 'video'): RecordService<videoResponse>
	//@ts-ignore
	collection(idOrName: 'photo'): RecordService<photoResponse>
	//@ts-ignore
	collection(idOrName: 'collection'): RecordService<collectionResponse>
	//@ts-ignore
	collection(idOrName: 'users'): RecordService<UsersResponse>
}