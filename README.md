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
