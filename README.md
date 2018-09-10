# Optimus UI

This is a collection of components and styles which are the building blocks of Optimus CMS.


## Installation

#### Install the package:

```bash
# npm
npm install @optimuscms/ui --save

# yarn
yarn add @optimuscms/ui
```

#### Install the Vue plugin:

```javascript
import OptimusUi from '@optimuscms/ui';

Vue.use(OptimusUi);
```

#### Import the SCSS:

Styles are a mix of the [Bulma](https://bulma.io/) framework and helpers from Optix Sass, so we must setup the scss imports as follows:

```scss
@charset "utf-8";

// Setup package variables
@import "~bulma/sass/utilities/initial-variables";
@import "~optix-sass/variables";
@import "~@optimuscms/ui/src/sass/variables";

// Import packages
@import "~bulma";
@import "~optix-sass";
@import "~@optimuscms/ui/src/sass/_all";
```

## Usage

### Form Components

**Errors:**

```vue
<o-errors></o-errors>
```

Props:
  * `errors`: Expects an `object` of errors

**Form field:**

```vue
<o-form-field></o-form-field>
```

Props:
  * `label|string`
  * `input|string`: this should match the ID of the input inside the form field
  * `required|boolean`: shows a visual indication that the content inside the form field is required

**Input:**

```vue
<o-input v-model="value"></o-input>
```

Props:
  * `id|string|required`
  * `type|string`: all input standard types are vaild including `textarea`, defaults to `text`
  * `required|boolean`: enables html validation

**Checkbox / Radio:**

```vue
<o-checkbox v-model="value"></o-checkbox>
```

Props:
  * `id|string|required`
  * `label|string|required`
  * `type|string`: accepts `radio` defaults to `checkbox`
  * `checked-value`: value which will be sent when form is submitted, defaults to `true`
  * `required|boolean`: enables html validation

**Select:**

```vue
<o-select v-model="value"></o-select>
```

Props:
  * `id|string|required`
  * `required|boolean`: enables html validation

**Multi Select:**

```vue
<o-multi-select v-model="value"></o-multi-select>
```

Props:
  * `options|array|required`: an array of objects containing a value keyed as `id` and label keyed as `name`
  * `optionValue|string`: Override the default options value key
  * `optionLabel|string`: Override the default options label key

### Build Components

**Header:**

```vue
<o-header></o-header>
```
Props:
  * `title|string|required`: title for the current page / section

**Main navigation:**

A wrapper component for the navigation items

```vue
<o-main-nav></o-main-nav>
```

**Main navigation item:**

```vue
<o-main-nav-item></o-main-nav-item>
```

Props:
  * `icon|(array|string)|required`: [Font awesome](https://github.com/FortAwesome/vue-fontawesome#explicit-prefix-note-the-vue-bind-shorthand-because-this-uses-an-array) icon name
  * `to|(object|string)|required`: vue router location

**Sub navigation:**

A wrapper component for the sub navigation items

```vue
<o-sub-nav></o-sub-nav>
```

Events:
  * `opened`: emitted when navigation is opened
  * `closed`: emitted when navigation is closed

**Sub navigation item:**

```vue
<o-sub-nav-item></o-sub-nav-item>
```

Props:
  * `to|(object|string)|required`: vue router location

Slots: 
  * `confirmButtonText`: Confirm

### UI Components

**Alert:**

```vue
<o-alert ref="alert">
    Alert message
</o-alert>
```

We can open alert via the `ref`.

```js
this.$refs.alert.open();
```

Change the default confirm button text via the named slot `confirmButtonText`

**Confirm:**

```vue
<o-confirm
    ref="confirm"
    @confirm="handleItem"
></o-confirm>
```

We can open the confirm modal via the `ref`, we can also pass an object which will be passed back in the confirm event.

```js
this.$refs.confirm.open({
    id: 1,
    title: 'Exmaple item'
});
```

Props:
  * `type|string`: type of alert, `info, warning, danger` by default `success`

Events:
  * `confirm`: emitted when the confirm button is clicked

Slots: 
  * `default`: The default slot proped with the passed object
  * `confirmButtonText`: Confirm
  * `cancelButtonText`: Cancel

Proped slot example:

```vue
<template slot-scope="item">
    Are you sure you want to move <strong>"{{ item.title }}"</strong>
</template>
```

**Notification:**

```vue
<o-notification></o-notification>
```

Props:
  * `closeable|boolean`: allowed user to close the notification, `true` by default

Events:
  * `close`: emitted when notification is closed

Slots:
  * `default`: Notification content

**Dropdown:**

```vue
<o-dropdown>
    <a slot="button">Please select...</a>

    <a class="dropdown-item">All categories</a>
    <a class="dropdown-item">Category One</a>
</o-dropdown>
```

Slots:
  * `default`: Dropdown items
  * `button`: Element to be used to trigger the dropdown

**Search Form:**

```vue
<o-search-form v-model="searchQuery"></o-search-form>
```

Props:
  * `placeholder|string`: placeholder text

Events:
  * `submit`: emitted when form is submitted.

**Table Sort:**

```vue
<o-table-sort></o-table-sort>
```

Props:
  * `column|string|required`: Name of the column
  * `current|string`: Name of the column which is currently being ordered by

Events:
  * `order`: emits the new column name with direction prefix

**Pagination:**

```vue
<o-pagination></o-pagination>
```

Props:
  * `options|object`: pagination object returned from laravel

Events:
  * `change-page`: emits page number when a pagination link is clicked
  
**Loader:**

```vue
<o-loader></o-loader>
```

Props:
  * `loading|boolean|required`: used to start and stop the loader

**Modal:**

```vue
<o-modal></o-modal>
```

Props:
  * `active|boolean|required`: used to show or hide the modal

Slots:
  * `default`: Modal content

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
