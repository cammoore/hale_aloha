/**
 * This file is a part of hale_aloha_dashboard.
 *
 * Created by Cam Moore on 11/12/15.
 *
 * Copyright (C) 2015 Cam Moore.
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy , modify, merge, publish, deistribute, sublicense, and/or sell
 * copies of the Software, and to permit person to whom the Software is
 * furnished to do so, subject to the following condtions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHOERS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETER IN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISIGN FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE
 */
Router.route('home', {
  path: '/',
  controller: 'HomeController'
})

Router.route('power', {
  name: 'power',
  path: '/power',
  controller: 'PowerController'
});

Router.route('pastUsage', {
  path: '/pastUsage',
  controller: 'PastUsageController'
});

Router.route('futureUsage', {
  path: '/futureUsage',
  controller: 'FutureUsageController'
});

//Router.route('heatmap', {
//  path: '/heatmap',
//  controller: 'HeatMapController'
//})

Router.route('alerts', {
  path: '/alerts',
  controller: 'NotificationsController'
})

Router.route('/status', {
  name: 'status',
  controller: 'StatusController'
});

Router.plugin('ensureSignedIn', {
  only: ['power', 'pastUsage', 'futureUsage', 'alerts', 'status']
});


//Router.route('Items', {
//  name:'Items',
//  path:'items/:low/:high',
//  subscriptions : function(){
//    var low = parseInt(this.params.low);
//    var high = parseInt(this.params.high);
//    return [
//      Meteor.subscribe("itemData",low,high),
//    ];
//  },
//  action: function () {
//    if (this.ready()) {
//      this.render();
//    } else {
//      this.render('Loading');
//    }
//  }
//});