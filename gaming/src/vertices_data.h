#ifndef VERTICES_DATA_H
#define VERTICES_DATA_H

#include <GL/glew.h>

const GLfloat cubeVertices[] = {
    // +z
    -0.5f, -0.5f,  0.5f, 1.0f, 0.2f, 0.0f,
     0.5f, -0.5f,  0.5f, 1.0f, 0.2f, 0.0f,
    -0.5f,  0.5f,  0.5f, 1.0f, 0.2f, 0.0f,
     0.5f,  0.5f,  0.5f, 1.0f, 0.2f, 0.0f,
     // -z
    -0.5f, -0.5f, -0.5f, 1.0f, 0.2f, 0.2f,
     0.5f, -0.5f, -0.5f, 1.0f, 0.2f, 0.2f,
    -0.5f,  0.5f, -0.5f, 1.0f, 0.2f, 0.2f,
     0.5f,  0.5f, -0.5f, 1.0f, 0.2f, 0.2f,
     // +x
     0.5f, -0.5f, -0.5f, 1.0f, 0.0f, 0.2f,
     0.5f, -0.5f,  0.5f, 1.0f, 0.0f, 0.2f,
     0.5f,  0.5f, -0.5f, 1.0f, 0.0f, 0.2f,
     0.5f,  0.5f,  0.5f, 1.0f, 0.0f, 0.2f,
     // -x
    -0.5f, -0.5f, -0.5f, 0.8f, 0.0f, 0.0f,
    -0.5f, -0.5f,  0.5f, 0.8f, 0.0f, 0.0f,
    -0.5f,  0.5f, -0.5f, 0.8f, 0.0f, 0.0f,
    -0.5f,  0.5f,  0.5f, 0.8f, 0.0f, 0.0f,
     // +y
    -0.5f,  0.5f, -0.5f, 1.0f, 0.0f, 0.0f,
     0.5f,  0.5f, -0.5f, 1.0f, 0.0f, 0.0f,
    -0.5f,  0.5f,  0.5f, 1.0f, 0.0f, 0.0f,
     0.5f,  0.5f,  0.5f, 1.0f, 0.0f, 0.0f,
     // -y
    -0.5f, -0.5f, -0.5f, 1.0f, 0.0f, 0.4f,
     0.5f, -0.5f, -0.5f, 1.0f, 0.0f, 0.4f,
    -0.5f, -0.5f,  0.5f, 1.0f, 0.0f, 0.4f,
     0.5f, -0.5f,  0.5f, 1.0f, 0.0f, 0.4f,
};

const GLubyte cubeIndexes[] = {
     0,  1,  2,
     1,  3,  2,
    
     4,  5,  6,
     5,  7,  6,
    
     8,  9, 10,
     9, 11, 10,
    
    12, 13, 14,
    13, 15, 14,
    
    16, 17, 18,
    17, 19, 18,
    
    20, 21, 22,
    21, 23, 22,
};

#endif // VERTICES_DATA_H
