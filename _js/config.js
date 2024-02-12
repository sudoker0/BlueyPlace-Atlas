// This script only applies to this instance of the Atlas.
// Please also check code indicated with "@instanceonly" outside this file.
// TODO: Avoid having instance-only code inside the main scripts to make updating easier.

const prodDomain = "2023.place-atlas.stefanocoding.me"
window.prodDomain = prodDomain

const instanceId = "2023"
window.instanceId = instanceId

const instanceSubreddit = "placeAtlas2023"
window.instanceSubreddit = instanceSubreddit

const instanceRepo = "https://github.com/placeAtlas/atlas-2023"
window.instanceRepo = instanceRepo

const pageTitle = "The 2023 BlueyPlace Atlas"
window.pageTitle = pageTitle

const canvasSize = {
	x: 1000,
	y: 1000
}
window.canvasSize = canvasSize

const canvasOffset = {
	x: -500,
	y: -500
}
window.canvasOffset = canvasOffset

const canvasCenter = {
	x: canvasSize.x/2 + canvasOffset.x,
	y: canvasSize.y/2 + canvasOffset.y
}
window.canvasCenter = canvasCenter

const variationsConfig = {
	default: {
		name: "BlueyPlace",
		code: "",
		default: 1,
		drawablePeriods: [1, 2],
		drawableRegions: [
			[[1, 54], [-500, -500, 499, 499]],
			[[55, 85], [-500, -500, 999, 499]],
			[[86, 114], [-1000, -500, 999, 499]],
			[[115, 152], [-1000, -1000, 999, 499]],
			[[153, 168], [-1000, -1000, 999, 999]],
			[[169, 201], [-1500, -1000, 999, 999]],
			[[202, 258], [-1500, -1000, 1499, 999]],
		],
		versions: [
			{ "timestamp": "Start", "url": ["./_img/canvas.png"] },
			{ "timestamp": "Final", "url": ["./_img/canvas.png"] },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true"><polygon points="154 0 154 38 39 38 39 192 0 192 0 0"/><polygon points="192 38 192 192 77 192 77 153 154 153 154 38"/><rect x="77" y="77" width="38" height="38"/></svg>'
	}
}
window.variationsConfig = variationsConfig

let defaultVariation = 'default'
window.defaultVariation = defaultVariation

let defaultPeriod = variationsConfig[defaultVariation].default
window.defaultPeriod = defaultPeriod

const useNumericalId = true
window.useNumericalId = useNumericalId