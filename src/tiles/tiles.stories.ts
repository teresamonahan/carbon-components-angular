import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";

import { TranslateModule } from "@ngx-translate/core";

import { TilesModule } from "../";

storiesOf("Tiles", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				TilesModule,
				TranslateModule.forRoot()
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<ibm-tile>
			tile content goes here...
		</ibm-tile>
		`
	}))
	.add("Multiple", () => ({
		template: `
		<div style="display: flex; flex-flow: row wrap; justify-content: space-around;">
			<ibm-tile>
				Tile 1
			</ibm-tile>
			<ibm-tile>
				Tile 2
			</ibm-tile>
			<ibm-tile>
				Tile 3
			</ibm-tile>
		</div>
		`
	}))
	.add("Clickable", () => ({
		template: `
		<p>Normal</p>
		<ibm-clickable-tile href="#">
			clickable tile content goes here...
		</ibm-clickable-tile>
		<p>Disabled</p>
		<ibm-clickable-tile href="#" [disabled]="true">
			clickable tile content goes here...
		</ibm-clickable-tile>
		`
	}));
