import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import EnsemblePreview from './preview-templates/EnsemblePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ConcertPagePreview from './preview-templates/ConcertPagePreview'
import StaffPagePreview from './preview-templates/StaffPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('staff', StaffPagePreview)
CMS.registerPreviewTemplate('ensembles', EnsemblePreview)
CMS.registerPreviewTemplate('concerts', ConcertPagePreview)