# Backend Assessment

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2b697faf8d5242e4ab750b3d091568a9)](https://app.codacy.com/gh/phiiileo/validate-age?utm_source=github.com&utm_medium=referral&utm_content=phiiileo/validate-age&utm_campaign=Badge_Grade_Settings)

Build and deploy a very simple API that does the following

1.  Calculate and return the age of a person, given their date of birth (dob) as query parameters to `GET /howold`
2.  Limit calls to `GET /howold` and prevent excessive usage from potentially ill-configured or malicious integrators. Only allow a maximum of 3 calls per second for each API client/caller

See full details and instructions in this [Google Doc](https://docs.google.com/document/d/1ma5vKz0j34gwI9WYrZddMM1ENlQddGOVFJ5qdSq2QlQ)
