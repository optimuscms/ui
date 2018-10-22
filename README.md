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

UI components are built using a mixture or [Tailwindcss](https://tailwindcss.com) utility classes, and [Optix Solutions](https://github.com/optixsolutions/sass) sass framework.

```scss
@charset "utf-8";

@tailwind preflight;
@tailwind components;

@import "variables";
@import "~@optimuscms/ui/src/sass/variables";

@import "~@optix/sass";
@import "~@optimuscms/ui/src/sass/index";

@tailwind utilities;
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

**Date Picker:**

```vue
<o-date-picker v-model="value"></o-date-picker>
```

Props:
  * `id|string|required`
  * `required|boolean`: Enables html validation
  * `time|boolean`:  Defaults to true, shows a time picker
  * `format|string`: Visual only format the date and time [formatting tokens](https://flatpickr.js.org/formatting/)

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

Props:
  * `buttonText|string`: text for the primary button by default `Ok`

**Confirmation:**

```vue
<o-confirmation
    ref="confirm"
    @confirm="handleItem"
></o-confirmation>
```

We can open the confirmation modal via the `ref`, we can also pass an object which will be passed back in the confirmation event.

```js
this.$refs.confirm.open({
    id: 1,
    title: 'Exmaple item'
});
```

Props:
  * `buttonText|string`: text for the primary button by default `Confirm`
  * `buttonClass|string`: class for the primary button by default `button-green`
  * `buttonCancelText|string`: text for the secondary button by default `Cancel`

Events:
  * `confirm`: emitted when the confirm button is clicked

**Notification:**

```vue
<o-notification></o-notification>
```

Props:
  * `closeable|boolean`: allowed user to close the notification, `true` by default

Events:
  * `close`: emitted when notification is closed

**Dropdown:**

```vue
<o-dropdown v-model="filters.category"></o-dropdown>
```

Props:
  * `options|array|required`: an array of objects containing a value keyed as `value` and label keyed as `label`
  * `placeholder|string`: Used as the option when nothing is selected `Please select` by default
  * `icon|string`: Icon used in the trigger button `angle-down` by default

Slots:
  * `button`
  * `option`

**Search Form:**

```vue
<o-search v-model="filters.title"></o-search>
```

Props:
  * `placeholder|string`: placeholder text

Events:
  * `submit`: emitted when form is submitted.

**Table Sort:**

```vue
<o-th-sort v-model="filters.sort"></o-th-sort>
```

Props:
  * `column|string|required`: Name of the column


**Pagination:**

```vue
<o-pagination></o-pagination>
```

Props:
  * `options|object`: pagination object returned from laravel

Events:
  * `change`: emits page number when a pagination link is clicked
  
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

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
