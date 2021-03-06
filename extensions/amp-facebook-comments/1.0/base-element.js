/**
 * Copyright 2021 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {FacebookBaseElement} from '../../amp-facebook/1.0/facebook-base-element';

export class BaseElement extends FacebookBaseElement {}

/** @override */
BaseElement['props'] = {
  ...FacebookBaseElement['props'],
  'numPosts': {attr: 'data-numposts'},
  'colorScheme': {attr: 'data-colorscheme'},
  'orderBy': {attr: 'data-order-by'},
};

/** @override */
BaseElement['staticProps'] = {
  'embedAs': 'comments',
};
