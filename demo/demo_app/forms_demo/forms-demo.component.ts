import { Component, OnInit } from "@angular/core";

@Component({
	selector: "forms-demo",
	template: `
	<h2>Checkbox</h2>
	<cdl-checkbox [(ngModel)]="firstCheckboxState">Checkbox ({{firstCheckboxState}})</cdl-checkbox>
	<cdl-checkbox disabled="true">Checkbox disabled</cdl-checkbox>

	<cdl-checkbox
		[(ngModel)]="secondCheckboxState"
		[indeterminate]="someSelected"
		(change)="onTristateChange()">
		Tristate Checkbox (State: {{secondCheckboxState}} Indeterminate: {{someSelected}})
	</cdl-checkbox>

	<cdl-checkbox *ngFor="let one of manyCheckboxes"
		[(ngModel)]="one.checked"
		(change) = "multiCheckboxChanged()"
		class="indent">
		Check ({{one.checked}})
	</cdl-checkbox>

	<cdl-checkbox class="ng-invalid ng-touched">Checkbox</cdl-checkbox>


	<h2>Switch</h2>

	<cdl-switch [(ngModel)]="firstSwitchState">Switch ({{firstSwitchState}})</cdl-switch>
	<cdl-switch disabled="true">Switch disabled</cdl-switch>


	<h2>Forms (Label)</h2>

	<cdl-label>
		<label label>Field small</label>
		<input type="text" [(ngModel)]="textInput1" class="input-field size-sm">
	</cdl-label>
	<p>Text: {{textInput1}}</p>

	<cdl-label>
		<label label>Field</label>
		<input type="text" [(ngModel)]="textInput2" class="input-field">
	</cdl-label>
	<p>Text: {{textInput2}}</p>

	<cdl-label>
		<label label>Field large</label>
		<input type="text" [(ngModel)]="textInput3" class="input-field size-lg">
	</cdl-label>
	<p>Text: {{textInput3}}</p>

	<cdl-label>
		<label label>Field disabled</label>
		<input type="text" class="input-field" disabled>
	</cdl-label>
	<br>

	<cdl-label>
		<label label>Textarea</label>
		<textarea [(ngModel)]="textareaText1" class="input-field"></textarea>
	</cdl-label>
	<p>Text: {{textareaText1}}</p>


	<cdl-label labelState="success">
		<label label>Field with success</label>
		<input type="text" class="input-field">
	</cdl-label>
	<br>

	<cdl-label labelState="warning">
		<label label>Field with warning</label>
		<input type="text" class="input-field">
	</cdl-label>
	<br>

	<cdl-label labelState="error">
		<label label>Field with error</label>
		<input type="text" class="input-field">
	</cdl-label>
	<br>
	`,
	styleUrls: ["./forms-demo.component.scss"]
})
export class FormsDemo {
	firstCheckboxState = true;
	secondCheckboxState = false;
	someSelected = false;
	firstSwitchState = false;

	manyCheckboxes = [{checked: false}, {checked: false}, {checked: false}, {checked: false}];

	onTristateChange() {
		this.someSelected = false;
		for (let i = 0; i < this.manyCheckboxes.length; i++) {
			let one = this.manyCheckboxes[i];
			one.checked = this.secondCheckboxState;
		}
	}

	multiCheckboxChanged() {
		let startValue = this.manyCheckboxes[0].checked;

		for (let i = 1; i < this.manyCheckboxes.length; i++) {
			let one = this.manyCheckboxes[i];

			if (one.checked !== startValue) {
				// set indeterminate
				this.secondCheckboxState = false;
				this.someSelected = true;
				return;
			}
		}

		this.someSelected = false;
		this.secondCheckboxState = startValue;
	}
}