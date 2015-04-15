var daniel = { first_name: 'Daniel',
               last_name: 'Leal',
               age: 21,
               job: 'Freelance Hitman'

              // Returns the full name of object.
              , get name() {
                    return this.first_name + ' ' + this.last_name }

              // Sets the name components of the object,
              // from a full name.
              , set name(new_name) {
                    var names = new_name.trim().split(/\s+/)
                    this.first_name = names['0'] || ''
                    this.last_name  = names['1'] || '' }
              }