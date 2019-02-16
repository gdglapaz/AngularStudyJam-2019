

export const COURSES: any = {

    1: {
        id: 1,
        description: "Angular Fundamentals",
        iconUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
        courseListIcon: 'https://angular.io/assets/images/logos/angular/angular.svg',
        longDescription: "Una intro a angular",
        category: 'BEGINNER',
        lessonsCount: 10
    },
    2: {
        id: 2,
        description: 'Angular Intermediate',
        longDescription: "Angular Intermedio",
        iconUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
        courseListIcon: 'https://angular.io/assets/images/logos/angular/angular.svg',
        category: 'ADVANCED',
        lessonsCount: 11
    },
    3: {
        id: 3,
        description: 'Angular Avanzado',
        longDescription: "Aprender Pwa",
        iconUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
        courseListIcon: 'https://angular.io/assets/images/logos/angular/angular.svg',
        category: 'ADVANCED',
        lessonsCount: 8
    },
    4: {
      id: 4,
      description: 'Flutter Fundamentons',
      longDescription: "Aprender flutter y supera lo nativo",
      iconUrl: 'https://flutter.io/assets/flutter-lockup-4cb0ee072ab312e59784d9fbf4fb7ad42688a7fdaea1270ccf6bbf4f34b7e03f.svg',
      courseListIcon: 'https://flutter.io/assets/flutter-lockup-4cb0ee072ab312e59784d9fbf4fb7ad42688a7fdaea1270ccf6bbf4f34b7e03f.svg',
      category: 'BEGINNER',
      lessonsCount: 8
  }
};


export const LESSONS = {

    1: {
        id: 1,
        "description": "Intro a javascript",
        "duration": "4 horas",
        "seqNo": 1,
        courseId: 1
    },
    2: {
        id: 2,
        "description": "Intro a typescript",
        "duration": "4 horas",
        "seqNo": 2,
        courseId: 1
    },
    3: {
        id: 3,
        "description": "Angular componentes",
        "duration": "2 horas",
        "seqNo": 3,
        courseId: 1
    },
    4: {
        id: 4,
        "description": "Comunicacio entre componentes",
        "duration": "2 horas",
        "seqNo": 4,
        courseId: 1
    },
    5: {
        id: 5,
        "description": "Formularios",
        "duration": "2 horas",
        "seqNo": 5,
        courseId: 1
    },
    6: {
        id: 6,
        "description": "Enrutamientos",
        "duration": "2 horas",
        "seqNo": 6,
        courseId: 1
    },
    7: {
        id: 7,
        "description": "Angular Material",
        "duration": "2 horas",
        "seqNo": 7,
        courseId: 1
    },
    8: {
        id: 8,
        "description": "Deployar nuestra app",
        "duration": "2 horas",
        "seqNo": 8,
        courseId: 1
    }
};

export function findCourseById(courseId:number) {
    return COURSES[courseId];
}

export function findLessonsForCourse(courseId:number) {
    return Object.values(LESSONS).filter(lesson => lesson.courseId == courseId);
}

