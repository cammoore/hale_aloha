# Hale Aloha Energy Dashboard

The Hale Aloha Energy Dashboard consists of three components.

  1. This Meteor Application
  2. A Java data bridge application. See [hale_aloha_dashboard_data_bridge](https://github.com/wattdepot/hale_aloha_dashboard_data_bridge)
  3. The [WattDepot energy system](http://wattdepot.org) monitoring the Hale Aloha dorms.
  
## Installation

The Hale Aloha Dashboard must be run on the same machine as the Hale Aloha Data Bridge.

1. Install Meteor, http://www.meteor.com/
2. Install MongoDB, http://www.mongodb.org/, and run the MongoDB daemon. Note the port number that the database is listening to.
3. Clone the Hale Aloha Energy Dashboard, https://github.com/wattdepot/hale_aloha_dashboard.git
4. cd to the `hale_aloha_dashboard` directory.
5. Edit the `settings.json` file to point to the CAS server you are using for authentication.  On Mopsa it should point to https://authn.hawaii.edu/cas/.
6. Edit the `start-dashboard.sh` script, setting the `MONGO_URL` to point to the running MongoDB. Make sure the `ROOT_URL` points to the machine you are running the dashboard on.  Make sure the last line will run Meteor on the right port.

## History

2015-10-15: Release 1.0.

## Credits

Cam Moore

Collaborative Software Development Laboratory, University of Hawaii, Manoa

## License

The MIT License (MIT)

Copyright (c) 2015 CSDL, Cam Moore

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.