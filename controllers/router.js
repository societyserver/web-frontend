angular.module('steam',
  [
  'ui.router',
  'ui.bootstrap',
  'bootstrapLightbox',
  'LocalStorageModule',
  'textAngular',
  'ngAudio',
  'ngVideo',
  'ngPDFViewer',
  'ngSanitize'
  ])

.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$provide',
  function ($locationProvider, $stateProvider, $urlRouterProvider, $provide) {

    $stateProvider.state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'loginCtrl',
      requireLogin: false
    })

    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'registerCtrl',
      requireLogin: false
    })

    .state('activate', {
      url: '/activate/:userid/:activationcode',
      templateUrl: '/templates/activate.html',
      controller: 'ActivationCtrl',
      requireLogin: false
    })

    .state('workarea', {
      url: '/',
      requireLogin: true,
      templateUrl: '/templates/workarea.html',
      params: {
        autoActivateChild: 'workarea.list'
      }
    })

    .state('workarea.groups', {
      url: '^/groups/:path',
      requireLogin: true,
      views: {
        'options': {
          templateUrl: '/views/options.html',
          controller: 'optionsCtrl'
        },
        'groupsList': {
          templateUrl: '/views/groupsList.html',
          controller: 'groupsListCtrl'
        }
      }
    })

    .state('workarea.list', {
      url: '^/room/:path',
      requireLogin: true,
      views: {
        'options': {
          templateUrl: '/views/options.html',
          controller: 'optionsCtrl'
        },
        'workspaceList': {
          templateUrl: '/views/workspaceList.html',
          controller: 'workspaceListCtrl'
        },
        'comments': {
          templateUrl: '/views/comments.html',
          controller: 'commentsCtrl'
        }
      }
    })

    .state('workarea.detailed', {
      url: '^/document/:path',
      requireLogin: true,
      views: {
        'options': {
          templateUrl: '/views/options.html',
          controller: 'optionsCtrl'
        },
        'workspaceDetailed': {
          templateUrl: '/views/workspaceDetailed.html',
          controller: 'workspaceDetailedCtrl'
        },
        'editor': {
          templateUrl: '/views/editor.html',
          controller: 'workSpaceEditorCtrl'
        },
        'comments': {
          templateUrl: '/views/comments.html',
          controller: 'commentsCtrl'
        }
      }
    })

    .state('workarea.fileupload', {
      url: '^/upload/:path',
      requireLogin: true,
      views: {
        'options': {
          templateUrl: '/views/options.html',
          controller: 'optionsCtrl'
        },
        'uploadFile': {
          templateUrl: '/views/uploadFile.html',
          controller: 'uploadCtrl'
        }
      }
    })

    .state('workarea.container', {
      url: '^/container/:path',
      requireLogin: true,
      views: {
        'options': {
          templateUrl: '/views/options.html',
          controller: 'optionsCtrl'
        },
        'createContainer': {
          templateUrl: '/views/createcontainer.html',
          controller: 'createContainerCtrl'
        }
      }
    })

    .state('workarea.room', {
      url: '^/createroom/:path',
      requireLogin: true,
      views: {
        'options': {
          templateUrl: '/views/options.html',
          controller: 'optionsCtrl'
        },
        'createRoom': {
          templateUrl: '/views/createroom.html',
          controller: 'createRoomCtrl'
        }
      }
    })

    .state('workarea.emptydoc', {
      url: '^/createdoc/:path',
      requireLogin: true,
      views: {
        'options': {
          templateUrl: '/views/options.html',
          controller: 'optionsCtrl'
        },
        'createDoc': {
          templateUrl: '/views/createdoc.html',
          controller: 'createDocCtrl'
        }
      }
    })

    $urlRouterProvider.otherwise('/room/')
  }])



.constant('editorConfig', function ($provide) {
  $provide.decorator('editorOptions', ['$delegate', function ($delegate, editorOptions) {
    editorOptions.bold.iconclass = "fa fa bold";
    editorOptions.italics.iconclass = "fa fa italic";
    editorOptions.underline.iconclass = "fa fa underline";
    editorOptions.ul.iconclass = "fa fa list";
    editorOptions.ol.iconclass = "fa fa list-ol";
    editorOptions.undo.iconclass = "fa fa undo";
    editorOptions.redo.iconclass = "fa fa repeat";
    editorOptions.justifyLeft.iconclass = "fa fa-align-left";
    editorOptions.justifyCenter.iconclass = "fa fa-align-justify";
    editorOptions.justifyRight.iconclass = "fa fa-align-right";
    return $delegate;
  }])
})
