window.AnswerList = Backbone.Model.extend({});

window.AnswerListCollection = Backbone.Collection.extend({
    model: AnswerList,
    urlRoot: ANSWERLIST_API_URL,
    
    fetch: function (options) {
        options || (options = {});
        options.data || (options.data = {});
        this.options || (this.options = { key: ANSWERLIST_KEY })
        filterMapping = { "key": this.options.key }
        options.data = _.extend(options.data, filterMapping);
        
        return Backbone.Collection.prototype.fetch.call(this,options);
    }
});