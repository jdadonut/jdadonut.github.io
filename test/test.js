function anonymous(
    
) {
    function MDXContent(_ref, {mdx, MDXLayout, _extends, _objectWithoutProperties, _excluded, layoutProps}) {
      var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
    
      return mdx(MDXLayout, _extends({}, layoutProps, props, {
        components: components,
        mdxType: "MDXLayout"}), mdx("hr", null), mdx("p", null, "title: Test Post\
                id: my-first-post,"), mdx("h2", null, "description: \"This is a test post\""), mdx("h1", null, "This is a test post"), mdx("p", null, "this post is written in MDX, loaded dynamically and stored in a JSON file, where it is then cached by the server and served to the client\
                by rendering it from the provided data."));
}
}