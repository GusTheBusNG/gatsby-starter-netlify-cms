import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import EnsemblePreview from './preview-templates/EnsemblePreview'
import OutreachPreview from './preview-templates/OutreachPagesPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ConcertPagePreview from './preview-templates/ConcertPagePreview'
import StaffPagePreview from './preview-templates/StaffPagePreview'
import MajorPagePreview from './preview-templates/MajorPagePreview'
import OutreachLandingPagePreview from './preview-templates/OutreachLandingPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('staff', StaffPagePreview)
CMS.registerPreviewTemplate('ensembles', EnsemblePreview)
CMS.registerPreviewTemplate('major', MajorPagePreview)
CMS.registerPreviewTemplate('outreach-landing', OutreachLandingPagePreview)
CMS.registerPreviewTemplate('outreach', OutreachPreview)
CMS.registerPreviewTemplate('concerts', ConcertPagePreview)
