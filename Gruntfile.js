module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'srcs/',
                src: ['*.{png,jpg,gif}'],
                dest: 'results/'
                }]
            }
        },
    responsive_images: {
            dev: {
                options: {
                    engine: 'gm',
                    newFilesOnly: true,
                    rename: false,
                    sizes: [
                        {
                            name: "small",
                            width: 300
                        }
                    ]
                },
                files: [
                    {
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/imgs/people/', 
                        dest: 'src/assets/imgs/people/small/'
                    },
                    {
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/imgs/researchArea/', 
                        dest: 'src/assets/imgs/researchArea/small/'
                    },
                    {
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/imgs/Issues/', 
                        dest: 'src/assets/imgs/Issues/small/'
                    },
                ]
            }
        
        },
        
    });
    
    grunt.registerTask('default', [
    ]);
    grunt.registerTask('res', [
    'responsive_images'
    ]);
};

