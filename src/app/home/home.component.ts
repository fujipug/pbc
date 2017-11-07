import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import firebase from 'firebase';

declare var jQuery: any;



@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  /**
   * Set our default values
   */
  public localState = { value: '' };
  /**
   * TypeScript public modifiers
   */
   urlTest: string[];

  constructor(
    public appState: AppState,
    public title: Title
  ) {}

  public ngOnInit() {
    
    firebase.database().ref('/folders/test/').once('value').then((snapshot) => {
      this.urlTest = snapshot.val();
      console.log(this.urlTest);
    });

    // Initialize collapse button
     // jQuery(".button-collapse").sideNav();
     jQuery('.materialboxed').materialbox();
     // Initialize collapsible (uncomment the line below if you use the dropdown variation)
     //$('.collapsible').collapsible();
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}