# Need for redux:
 
As the requirements for JavaScript single-page applications have become increasingly complicated, our code must manage more state than ever before. This state can include server responses and cached data, as well as locally created data that has not yet been persisted to the server. UI state is also increasing in complexity, as we need to manage active routes, selected tabs, spinners, pagination controls, and so on.

Managing this ever-changing state is hard. If a model can update another model, then a view can update a model, which updates another model, and this, in turn, might cause another view to update. At some point, you no longer understand what happens in your app as you have lost control over the when, why, and how of its state. When a system is opaque and non-deterministic, it's hard to reproduce bugs or add new features.

This complexity is difficult to handle as we're mixing two concepts that are very hard for the human mind to reason about: **mutation and asynchronicity. **

Libraries like React attempt to solve this problem in the view layer by removing both asynchrony and direct DOM manipulation. However, **managing the state of your data is left up to you. This is where Redux enters.**