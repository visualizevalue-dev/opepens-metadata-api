/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'opepensea' }
})

// General metadata
Route.get('/opepen.json', 'OpepenMetadataController.contractMetadata')
Route.get('/base.png', 'OpepenMetadataController.baseImage')

// Token specific metadata
Route.get('/:id/metadata.json', 'OpepenMetadataController.metadata')
Route.get('/:id/image-uri', 'OpepenMetadataController.imageURI')
Route.get('/:id/image', 'OpepenMetadataController.image')
Route.get('/:id/render', 'OpepenMetadataController.render')

// TODO: Deprecate
Route.get('/:id/image.png', 'OpepenMetadataController.image')
