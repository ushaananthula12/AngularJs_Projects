angular.module('notepadApp', [])
    .controller('NotepadController', ['$scope', function($scope) {
        $scope.notes = JSON.parse(localStorage.getItem('notes')) || [];
        $scope.newNoteContent = '';
        $scope.currentNote = null;

        $scope.addOrUpdateNote = function() {
            if ($scope.currentNote) {
                $scope.currentNote.content = $scope.newNoteContent;
                $scope.currentNote.lastModified = new Date();
                $scope.currentNote = null;
            } else {
                $scope.notes.push({
                    content: $scope.newNoteContent,
                    lastModified: new Date()
                });
            }
            $scope.newNoteContent = '';
            $scope.saveNotes();
        };

        $scope.editNote = function(note) {
            $scope.newNoteContent = note.content;
            $scope.currentNote = note;
        };

        $scope.deleteNote = function(note) {
            const index = $scope.notes.indexOf(note);
            if (index > -1) {
                $scope.notes.splice(index, 1);
            }
            $scope.saveNotes();
        };

        $scope.saveNotes = function() {
            localStorage.setItem('notes', JSON.stringify($scope.notes));
        };
    }]);
