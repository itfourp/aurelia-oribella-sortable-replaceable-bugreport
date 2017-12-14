# aurelia-oribella-sortable-replaceable-bugreport

## Startup

```shell
npm install && jspm install
```

## Start the application

Open index.html in firefox. If you want to use another browser you need to serve the files via web server.

## Reproduce the bug

### How it should be

Add two sort elements by pressing the "Add sort element"-button. Then add the equivalent amount of other sort elements by pressing the "Add other sort element"-button.

Press the "Swap elements"-button. The templating should work correctly here. 

### How it should not be

Add two sort elements by pressing the "Add sort element"-button. Now press the "Swap elements"-button. The templating should not work as expected here.

## Expectation

When pressing the "Swap elements"-button the elements of the upper sortable are replaced with the elements of the lower sortable and vice versa. My expectation is, that the replaceable parts are used as defined in the app.html-file:

The upper sortable should always contain an input and a span for each element, while the lower sortable should always show an input and a textarea for each element.