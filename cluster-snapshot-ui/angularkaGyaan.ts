/**
 Installations:

 -> node -v
 -> npm -v
 -> npm init -> generates package.json
 now install webpack:
 -> npm install webpack --save-dev
 save-dev saves it in dependencies in package.json

 to install all the dependencies of package.json, run:
 -> npm install (by going to the folder of package.json)

 to create a local server, install:
 -> npm install live-server --global

 --global saves them for to be able to access from anywhere in the computer

 to create a bundle of js, run:
 -> npm run dev

 whenever we save our code to load page automatically and create a bundle, we install:
 -> npm install webpack-dev-server --save-dev

 to auto update html files in dist folder we install:
 -> npm install html-webpack-plugin --save-dev

 Installing babel
 -> npm install babel-core babel-loader babel-preset-env --save-dev

 babel-loader to load all types of files, convert es6 to es5 code, SASS to CSS

 Somethings like Promises, Arrays.from , etc were not present in ES5, so inorder to make them work we install:
 -> npm install babel-polyfill --save

 😒FETCH is new and might not be recognised by old browsers, so alternate to that is axios
 npm install axios --save

 export NODE_EXTRA_CA_CERTS=~/Desktop/DIVYA.JAIN/zscaler.pem

 npm install -g @angular/cli@latest
 Creating new Project ----> ng new my-app-name
 run using: ng serve

 😒npm install bootstrap@3 --save
 to add it in application: goto angular.json > "styles"
 add: "/node_modules/bootstrap/dist/css/bootstrap.css"
 npm install ---> to generate project dependencies from package.json

 ng generate component <component name>

 Debugging ---> Augury (A chrome extension) is used for debugging
 */

/**
 Decorators aka annotations
 it generates a component in app folder
 commandValue ---> ng generate component <component name>
 or ---> ng g c recipes --spec false //skips getPodLogs file creation

 Always remember to add ComponentClass to add.module.ts > declarations array

 by default selectors work as tags --> selector: 'selector-name'
 to use them as tags --> selector: '[selector-name]'
 to use them as class ---> selector: '.selector-name'

 View Encapsulation --->
 in @Component, there is an attribute with name --->
 encapsulation: ViewEncapsulation.None or Native or Emulate
 This is useful as by default all the css files have component scope. If we use VE.None, it becomes global.
 By default we should use Emulated as not all browsers support other type of VE
 */

/**
 * Random gyaan:
 *
 * (<HTMLInputElement>event.target).value;
 *
 <input type="text" class="form-control" (input)="catchMyEvents(😒$event)">
 *  above captures all the events, $event is a reserved variable which captures every event including key strokes
 *
 * <p *ngIf="yourCondition">what to show</p>
 */

/**
 @Directive

 [ngStyle] = "{<some-style, say -->backgroundColor: getColorMethod()>}"

 ngFor="let server of servers"
 this makes it loop and create number of tags = number of servers
 below is a usage:

 <div ngFor="let currentElement of myArrayObject; let i = index"  ----> here index is a reserved keyword
 [ngStyle]="{backgroundColor: i%2 === 0 ? 'white' : 'grey'}"
 [ngClass]="{'white-text': <some Boolean value>}"
 > {{ logItem }}
 </div>
 */

/**
 Custom directives:
 usage ----> <p appBasicDirective> Some text </p>

 @Directive({ selector: '[appBasicDirective]' }) ---> 'app' prefix should be used
 export class IngredientDirective implements OnInit { ---> should be add to add.module.ts declarations
 constructor(private elementRef: ElementRef) {}
  ngOnInit() {this.elementRef.nativeElement.style.backgroundColor = 'green';} ---> setting your custom css
  }

 Another way:
 @Directive({selector: '[appBasicDirective]'})
 export class IngredientDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');}
  }
 We use renderer here as in first way we were directly changing the DOM which we might not have access to in some cases.
 */

/**
 Property binding
 [property-name]="your-property-variable-form-xyz.ts"

 @Input() element: {field: string, field2: string} ---> a decorator to bind properties
 @Output() ---> when we are passing something(event) out of the component
 Assigning alias to element ---->
 @Input('alias-for-element')
 @Output('alias-for-element')


 Custom event binding:
 @Output somePropertyToBindToEvent = new EventEmitter<{field: string, field2: string}>
 | EventEmitter | is an object in Angular which allows you to create your event
 <my-component-tag (somePropertyToBindToEvent)="someMethod($event)"> </my-component-tag>

 */

/**
 Local references in template:
 <input type="text" id="name" class="form-control" #localRefVariable>
 <button class="btn btn-success" (click)="onAdd(localRefVariable)">Add</button>
 Using this approach we can pass elements to methods like below:

 onAdd(localRefVariable: HTMLInputElement) { console.log(localRefVariable.value) }

 @ViewChild('how-we-want-to-select-element') localRefVariable: typeOfComponent;
 e.g.: @ViewChild('localRefVariable') localRefVariable: ElementRef ;
 */

/**
 anything we place b/w our component tags, by default it gets ignored
 <my-component-tag> <p> some text </p> </my-component-tag>
 Some text here will be lost. So in order to make this visible we need to add :
 ---->    <ng-content></ng-content>
 in the respective-component.html
 */

/**
 LIFECYCLE hooks
 like ngOnInit() {} is generated by default in every component we create from CLI

 ngOnChanges ---> called after a bound i/p property changes
 ngOnInit ---> called once the component is initialized
 ngDoCheck ----> called every time change detection is run, every event (even if the event is redundant ) calls it
 ngAfterContentInit ----> after content(ng-content) has been projected into view
 ngAfterContentChecked ----> after every time projected content is checked
 ngAfterViewInit ----> after the component's view and child views are initialized
 ngAfterViewChecked ----> after every time any view has been checked
 ngOnDestroy ----> when the component is about to be destroyed
 */

/**
 why and how is the feature passed here ?
 Ans: in our header component <app-header (featureSelected)="onNavigate($event)">
 we are passing $event which captures all events that occur. now when we click on tabs, say recipe,
 we pass 'recipe' string as event to onNavigate function and there by setting :
 <app-recipes ngIf="loadedFeature === 'recipe'"></app-recipes>
 same goes for shopping-list
 onNavigate(feature: string) { this.loadedFeature = feature; }
 */

/**
 * @HostListener('mouseleave') methodName(eventData: Event)
 * {this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');}
 *
 * @HostBinding
 * @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
 */

/**
 * ROUTING
 * In app.module.ts, add below class level constant:
 const appRoutes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'users', component: UsersComponent} ]; // localhost:4200/users

 In NgModule > imports[] -> add : RouterModule.forRoot(appRoutes)
 now to make routing working, use
 <a routerLink="/yourPath"> path </a>
 Here : -> routerLink="/yourPath" is an absolute path here whereas routerLink="yourPath" is a relative path

 Now add below to a div element where we want our selected route to load:
 <router-outlet></router-outlet>

 making current tab as active:
 <a routerLink="/yourPath" routerLinkActive="active">

 But here /server and / both will be marked as active as angular sees which all paths are being used
 so to manage that, use :
 <a routerLink="/yourPath" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true} ></a>

 Routing programmatically:
 constructor(private router: Router) {}

 onSOmeAction() { this.router.navigate(['/goToNextPath']
 */

/**
 Getting parameters:

 constructor(private route: ActivatedRoute) {}

 this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };  -->> this captures 1st time input
 this.route.params.subscribe(
 (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
 };  -->> this captures input to further update view

 ->>>  setting queryParams and fragments:
 this.router.navigate(['/servers', id, 'edit'],
 {queryParams: {myId: '1'}, fragment: 'loading'})
 --> url goes from 'http://localhost:4200/' to: http://localhost:4200/servers/2/edit?myId=1#loading

 when we navigate in our app to a url(using in-page route), query routes disappear
 to preserve the information, we use :
 ---> this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
 here, queryParamsHandling is used to keep our query parameters.
 preserve is a keyword.
 Another is 'merge', which adds old queryParams to our new queryParams.
 */

/**
 GUARDS:
 ex :Guarding against if a user is logged in or not.
 To do so, we need to create a service that will implement CanActivate interface.
 in its canActivate method, we need to return a Observable/Promise/boolean if we are logged in or not
 also, we can navigate the user to a specific page.
 Example: ----->
 canActivate(route: ActivatedRouteSnapshot,
 state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()  --> authService, where we simply check if loggedIn is true or not
      .then((authenticated: boolean) => {
        if (authenticated) { return true;}
        else {
          alert('Login to access servers');
          this.router.navigate(['/']);
        }});
  }

 Now to make this working and safe guards routes, we need to add canActivate tag in our routes as below:
 path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [
 {path: ':id', component: ServerComponent},
 {path: ':id/edit', component: EditServerComponent}
 ]}

 This will apply to all the children as well. Also, we need to import the services in our app.module

 to just protect the child routes, we do the same as above but implement CanActivateChild interface
 and add canActivateChild: [AuthGuard] to the parent
 path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
 {  path: ':id', component: ServerComponent  }
 ]}
 this will allow access to /servers but not to /servers/id


 Guards:
 if you try to navigate to another page before saving your changes, it allows to alert user
 to save the information.
 Now to do so, create an interface XYZ with below method:
 😒 interface XYZ { canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean; }
 Now in the same file, create below class:
 😒 export class CanDeactivateGuard implements 😒CanDeactivate<XYZ> {
  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}

 😒 CanDeactivate<T> is a generic class provided by angular which accepts your interface as type.
 Now, in the component in which we want to add this guard, implement the interface xyz and as below:
 canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (<changes not save logic>) { return confirm('Discard changes?');}
    else {  return true; }
  }
 */

/**
 * Resolvers:
 These are used to pass model objects (specially in async calls)

 @Injectable()
 export class MyResolver implements 😒Resolve<MyModel> {
  constructor(private aService: AnotherService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
          : Observable<MyModel> | Promise<MyModel> | MyModel {
    return this.AnotherService.getMyModelBasedOnIdFromRouteParam(+route.params['id']);
  }}

 To make this working, add resolve property in routes:
 {path: ':id', component: MyComponent, 😒resolve: {myModel: MyResolver}},

 Now read it as below in respective component:
 this.route.data.subscribe((data: Data) => { this.server = data['myModel'];});
 ---> param name {myModel} should be same as assigned in resolve property of app-routing.module
 */

/**
 😒 Observables:

 const myObserver : 😒 Observable = Observable.create(
 (observer: Observer<String>) => {
    setTimeout(() => { observer.next('first package')} , 1000);
    setTimeout(() => { observer.next('Second package')} , 2000);
    setTimeout(() => { observer.error('Corrupt package')} , 3000);
    aetTimeout(() => { observer.complete()} , 3000);
 })

 myObserver.subscribe(
 (str: string) =>{ console.log(str)} ,
 (error: string) =>{console.log(error)} ,
 () =>{console.log('completed')}
 )

 NOTE: Always unsubscribe to observable as it will keep running even if you navigate from a component.
 Trick to do :
 mySubscriber: 😒Subscription;  // A data type to hold subscriber.

 ---> Implement OnInit
 Later in ngInit(){ this.mySubscriber = myObserver.subscribe( <code> ); }
 ---> Implement OnDestroy
 now unsubscribe using : ngOnDestroy(){ this.mySubscriber.unsubscribe(); }


 😒 Subject : these are an alternate to EventEmitter (works only with Observables).
 usage:
 ingredientsChanged = new 😒Subject<Ingredient[]>();
 now in place of emit(<code>), replace with next(<code>)
 But catch is, now we need to unsubscribe every time.
 */

/**
 * Forms:
 NgForm: to access whole form object
 <form (😒ngSubmit)="onFormSubmit(f)" #f="😒ngForm">

 to group some values, we use 😒ngModelGroup which should be equal to a string
 <div ngModelGroup="userDate" #userDateValues="ngModelGroup">

 Now to show some error, we can use userDataValues as below:
 😒<p *ngIf="!userDataValues.valid && 😒userDataValues.touched">Some error message</p>

 reset: f.reset()
 to reset to some default values, we can pass an object to reset using below methods:
 1. this.myform.setValues( { <whole-form-values> });
 2. this.myform.patchValues( {<only values you want to set>} );

 😒to show red border:
 input.ng-invalid.ng-touched { border: 1px solid red; }

 😒Form provides 2 observables:
 prints whole form object =:> this.myForm.valueChanges.subscribe((value) => console.log(value););
 prints status of form (valid, invalid, pending)
 =:> this.myForm.statusChanges.subscribe((value) => console.log(value););
 */

/**
 * Reactive forms: import 😒ReactiveFormsModule in app.module.ts
 myForm: FormGroup;
 onInit(){
        field1: new FormControl(null, Validators.required),
        field2: new FormControl('default value', [Validators.required, Validators.email]),
        hobbies: new 😒FormArray([])
        &  . . . . so on
        }

 onAddHobby(){
        const hobby = new FormControl(null, Validators.required);
        (<FormArray>this.myForm.get('hobbies')).push(hobby);
        }

 <form [😒formGroup]='myForm'>
 <input 😒formControlName='field1'>
 <span *ngIf="!myForm.get('field1').valid() && myForm.get('field1').touched()">
 enter correct values
 </span>
 */

/**
 * 😒custom validators:

 #this has to be a return type of key, value pair#

 forbiddenUserName(control: FormControl): {[s: string]: boolean} {
          if(forbiddenUserNameArray.indexOf(control.value) >= 0 ){
          return {'forbiddenUserName': true};
          }
          return null;
          #dont return {'forbiddenUserName': false} : reason ? unknown #
          }

 😒async validators:

 asyncForbiddenEmail(control: FormControl: Promise<any> | Observable<any> {
          const promise = new Promise<any>((resolve, reject) => {
          setTimeout(() => {
          if(email === 'abc@getPodLogs.com') {
          resolve ({'emailIsForbidden': true});
          } else {  resolve(null) ; }
          }, 1500);
          });
    return promise;
          }

 usage: field1: new FormControl(null, [Validators.required, this.forbiddenUserName.bind(this)],
 this.asyncForbiddenEmail.bind(this)),
 */

/**
 😒Pipes:
 CLI commandValue: ng generate pipe pipename
 to make it accessible, add it to app.module.ts > declarations

 string type => {{name | uppercase}} => outputs name in uppercase
 date => {{ startDate | date: 'fullDate' | uppercase }} => its a parameterized pipe with chaining

 Custom pipes:

 😒@Pipe({
          name: 'myPipe',
          pure: false   // false makes angular recalculate data every time something changes
          })
 export class CustomPipe implements 😒PipeTransform {
          😒transform(value: any, param1: number, param2: string) {
          return value.substr(0,param1) + param2 ;
          }
          }

 usage => {{ serverName | myPipe:5:'...' }}
 => here we are passing params to pipes

 😒filter on for loops :
 <li *ngFor='let name of names | myPipe:5:'...'> .. <operations> .. </li>

 😒async pipes:
 in .ts file:  status = new Promise((resolve, reject) => { setTimeout({ resolve('stable'); }, 1500); });
 => this sets status to stable after 1.5 seconds

 usage: <h3> App status: {{ status | async }}  </h3>
 */


/**
 Http requests: make sure to import HttpModule


 import {Http} from @angular/http
 @Injectable
 export class MyHttp{
            constructor(private http: 😒Http/HttpClient){}

            getData(data: any){
            return this.http.post('www.myGetDataUrl.com')
            .map((response: Response) => { return response.json(); })
            .catch((error: Response) =>{ return Observable.throw('something went wrong') });
            }

            saveData(data: any){
            const myHeader = new 😒Headers({'Content-Type': 'application/json'});
            return this.http.post('www.mySaveDataUrl.com', data, {😒headers: myHeader});
            }
            Note: this returns an observable (which is unsubscribed by angular on its own)

            usage > another-service:

            onAddData(data){
            this.service.saveData(data).subscribe({
            (response: Response ) => console.log(response),
            (error) => console.log(error)
            });

            onGetData(){ //similar as onAddData() }

 */
