console.log(backtrack([...path, options[i]], options.slice(0, i).concat(options.slice(i + 1))));