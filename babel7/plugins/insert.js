const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => `console.${item}`);

module.exports = function (api) {
    return {
        visitor: {
            CallExpression(path, state) {
                if (path.node.isNew) {
                    return;
                }
                const calleeName = path.get('callee').toString();

                if (targetCalleeName.includes(calleeName)) {
                    const { line, column } = path.node.loc.start;
                    const newNode = api.template.expression(`console.log("${state.filename || 'unkown filename'}: (${line}, ${column})")`)();
                    newNode.isNew = true;
                    path.insertBefore(newNode);
                }
            }
        }
    }
}