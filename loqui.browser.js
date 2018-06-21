function loqui(list=[{text:'', style:''}]) {

    return console.log(

      list
        .map(log =>
          Array.isArray(log)
          ? `%c${log[0]}`
          : `%c${log.text}`
        )
        .join(''),

      ...list
        .map(log =>
          Array.isArray(log)
          ? Array.isArray(log[1])
            ? log[1].join('')
            : log[1]
          : Array.isArray(log.style)
            ? log.style.join('')
            : log.style
        )

    )

}