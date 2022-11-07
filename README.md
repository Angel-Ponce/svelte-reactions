<h1 align="center">Svelte Reactions 🙂</h1>

<p align="center" style="font-size: 1.2rem">
  A siimple and pretty component to add reactions in your application
</p>

<div align="center">
  <a href="https://svelte.dev/repl/ca9025e2d4084b6fa6040eb61fafe643?version=3.49.0">
    <b style="font-size: 2rem">REPL</b>
  </a>
</div>

<hr />

<div align="center">
  <img
    src="https://img.shields.io/github/stars/Angel-Ponce/svelte-reactions"
    alt="Stars"
  />
  <img
    src="https://img.shields.io/github/forks/Angel-Ponce/svelte-reactions"
    alt="Forks"
  />
  <img
    src="https://img.shields.io/github/issues/Angel-Ponce/svelte-reactions"
    alt="Issues"
  />
</div>

## 🚀 Install

Using npm

```bash
  npm i svelte-reactions
```

Or using yarn

```bash
  yarn add svelte-reactions
```

## 🤔 Usage

Using js

```html
<script>
    import 'svelte-reactions/global.css';
    import { Trigger } from 'svelte-reactions';

        const reactions = [
            {
                id: '1',
                reaction: '👍',
                quantity: 100,
                clicked: false
            }
        ];
</script>

<Trigger bind:reactions />
```

Using ts

```html
<script lang="ts">
    import 'svelte-reactions/global.css';
    import { Trigger, type ReactionType } from 'svelte-reactions';

        const reactions: ReactionType = [
            {
                id: '1',
                reaction: '👍',
                quantity: 100,
                clicked: false
            }
        ];
</script>

<Trigger bind:reactions />
```

### For more expamples go to the [REPL](https://svelte.dev/repl/ca9025e2d4084b6fa6040eb61fafe643?version=3.49.0)

## 🎨 Theming

We expose some CSS Variables to make more easy customize the colors of the component:

| Variable | Description |
| :------- | ----------: | 
| --srTriggerBg | Define the background color of default Trigger component |
| --srTriggerColor | Define the text color of default Trigger component |
| --srTriggerHoverBg |  Define the background hover color of default Trigger component |
| --srTriggerContainerBoxShadow | Define the style box shadow of the reactions container |
| --srTriggerContainerBg | Define the background color of the reactions container |
| --srReactionClickedBg | Define the background color of reaction block when this is already clicked |
| --srReactionNotClickedBg | Define the background color of reaction block when this is not already clicked |
| --srReactionHoverBg | Define the background hover color of reaction block |
| --srReactionClickedHoverBg | Define the background hover color of reaction block when this is already clicked |
| --srEmojiColor | Define the text color of reaction |
| --srEmojiClickedColor | Define the text color of reaction when this is already clicked |
| --srLabelBorderColor | Define the border color of default label component |
| --srLabelClickedBorderColor | Define the border color of default label component when reaction is already clicked |
| --srLabelBg | Define the background color of default label component |
| --srLabelClickedBg | Define the background color of default label component when reaction is already clicked |
| --srLabelColor | Define the text color of default label component |
| --srLabelClickedColor | Define the text color of default label component when reaction is already clicked |
| --srLabelHoverBg | Define the background hover color of default label component |
| --srLabelClickedHoverBg | Define the background hover color of default label component when reaction is already clicked |

Then you can use this variables to customize the component, for example:

```html
<!-- CustomReactionComponent.svelte -->
    
<script>
    import { Trigger } from 'svelte-reaction';
    
    export let reactions;
    export let showLabels = true;
    export let position = 'bottom-left'
</script>
    
<Trigger {reactions} {showLabels} {position} />

<style global>
    :root {
        --srTriggerBg: red;
        --srTriggerHoverBg: blue;
        --srTriggerColor: white;
     }
</style>
```

If you need to be more strict, always you can overwrite the next classes to get the better result:

| Class name | Description |
| :------- | ----------: | 
| .trigger-container | Default class for default trigger and labels container |
| .trigger  | Default class for default trigger element |
| .reactions-container|  Default class for the reactions contanier (floating component) |
| .reaction | Default class for the reaction element |
| .emoji  | Default class for the emoji element |
| .labels-container | Deault class for the labels container |
| .label | Default class for the label element |
| .label-component | Default class for the label element, when the reaction is defined as SvelteComponent insted of String |

**Remember alway use global styles for overwriting CSS variables and classes**

## 📂 API

### ReactionType attributes

| Property | Type | Description |
| :------- | :--: | ----------: | 
| `id` | string | Identifier of a reaction, useful for bind data with your database. |
| `reaction` | string \| SvelteComponent | You can use any `string` for a reaction, however we recomend you to use a string with 1 value of lenght, when you use an `SvelteComponent` as reaction, components like `svg` or `img` or any other, we recomend you to use this sizes: `width` between `20px` and `35px` same as height. |
| `quantity` | number | Define the quantity of reactions, for example 50 likes in some post. |
| `clicked` | boolean | Define if the current user clicked some reaction. | 

### Placment type

This type is used on the `<Trigger />` component props, for example:

```html
  <Trigger position='bottom-left' />
```
valid values:

`'bottom-left' | 'top-left' | 'bottom-right' | 'top-right'`

### Trigger properties

| Property | Type | Description |
| :------- | :--: | ----------: |
| `reactions` | ReactionType[] | Define the set of reactions. |
| `showLabels` | boolean | Define if the component generate summary of reactionis. | 
| `position` | Placement | Define the placement of the reactions containers. |
| `on:reaction` | CustomEvent | Throw an event when some reaction is clicked |
